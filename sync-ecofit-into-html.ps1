# Re-embeds ecofit.js into each *.html after you edit ecofit.js (run from PowerShell in this folder).
$ErrorActionPreference = "Stop"
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$jsPath = Join-Path $base "ecofit.js"
if (-not (Test-Path $jsPath)) { throw "ecofit.js not found" }
$js = [System.IO.File]::ReadAllText($jsPath)
$nl = [Environment]::NewLine
$newBlock = "        <script>$nl" + $js + "$nl        </script>"

function Replace-EcoFitEmbed([string]$c) {
    $lt = $c.IndexOf("<script>", [System.StringComparison]::Ordinal)
    while ($lt -ge 0) {
        $peek = $c.Substring($lt, [Math]::Min(120, $c.Length - $lt))
        if ($peek -match "// EcoFit") { break }
        $lt = $c.IndexOf("<script>", $lt + 1, [System.StringComparison]::Ordinal)
    }
    if ($lt -lt 0) { return $null }
    $start = $lt
    while ($start -gt 0 -and ($c[$start - 1] -eq ' ' -or $c[$start - 1] -eq "`t")) {
        $start--
    }
    $j = $c.IndexOf("</script>", $lt, [System.StringComparison]::Ordinal)
    if ($j -lt 0) { return $null }
    $end = $j + "</script>".Length
    return $c.Remove($start, $end - $start).Insert($start, $newBlock)
}

Get-ChildItem (Join-Path $base "*.html") | ForEach-Object {
    $path = $_.FullName
    $c = [System.IO.File]::ReadAllText($path)
    $c2 = Replace-EcoFitEmbed $c
    if ($null -eq $c2) {
        Write-Host "SKIP: $($_.Name) (no embedded EcoFit block found)"
    } elseif ($c2 -eq $c) {
        Write-Host "SKIP: $($_.Name) (unchanged)"
    } else {
        [System.IO.File]::WriteAllText($path, $c2, [System.Text.UTF8Encoding]::new($false))
        Write-Host "Updated: $($_.Name)"
    }
}
