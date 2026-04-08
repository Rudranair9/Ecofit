# 🌿 Ecofit - Environmental Impact Assessment Tool

A beautiful, full-featured web application that helps users assess the environmental impact of their clothing choices. Built with vanilla HTML, CSS, and JavaScript.

## 📋 Project Overview

Ecofit is an educational tool designed for your web programming subject that demonstrates:

- **Interactive form handling** with real-time validation
- **Complex environmental impact calculations** using multiple factors
- **Stunning UI/UX design** with celadon color palette
- **Responsive design** that works on all devices
- **Smooth animations and transitions** for enhanced user experience
- **Data visualization** with circular progress indicators

## 🎨 Design Features

### Visual Design

- **Color Palette**: Custom celadon shade gradient (soft greenish-blue tones)
  - Celadon-50 to Celadon-900 for depth and hierarchy
  - Accent colors: Sage, Mint, Teal for visual interest
- **Typography**:
  - Poppins (display font) for headings - modern and bold
  - Inter (body font) for content - clean and readable
- **Animations**:
  - Floating background shapes for visual depth
  - Fade-in and slide-in effects for entrance animations
  - Smooth transitions on all interactive elements
  - Bounce animation on logo and icons
- **Glass-morphism**: Semi-transparent cards with backdrop blur effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices

### Key UI Components

1. **Header Section**: Logo with animated leaf emoji and brand tagline
2. **Input Form**: 5 interactive form fields for data collection
3. **Results Dashboard**: 4 metric cards showing water, carbon, chemicals, and waste
4. **Circular Progress**: Interactive SVG progress indicator with animated fill
5. **Breakdown Section**: Detailed component impact analysis
6. **Recommendations**: Personalized suggestions for reducing impact
7. **Info Cards**: Educational content about fashion sustainability
8. **Floating Shapes**: Animated background elements for visual appeal

## 📁 File Structure

```
Ecofit/
├── index.html      (12 KB) - Semantic HTML with form and results sections
├── style.css       (19 KB) - Complete styling with animations and responsive design
├── script.js       (16 KB) - Impact calculations and interactivity
└── README.md       - This file
```

## 🚀 How to Use

### Installation

1. **Download** the three files (index.html, style.css, script.js)
2. **Create a folder** named "Ecofit" on your computer
3. **Place all three files** in the same folder
4. **Keep them together** - they must be in the same directory for links to work
5. **No server needed** - runs entirely in the browser!

### Opening the Application

1. Navigate to your Ecofit folder
2. Right-click on `index.html`
3. Select "Open with" and choose your browser (Chrome, Firefox, Safari, Edge)
4. Or simply double-click `index.html`

## 📊 Using the Application - Assess Your Garment

### Step 1: Select Material Type

- Choose from 9 different fabric types
- Each has different environmental impacts
- Options: Cotton, Polyester, Wool, Silk, Linen, Nylon, Acrylic, Leather, Recycled Material

**Why it matters:**

- Cotton requires 2,700 liters of water per shirt
- Recycled materials only need 30 liters
- Synthetic materials use less water but more chemicals

### Step 2: Choose Garment Type

- Select what type of clothing you're assessing
- Options: T-Shirt, Jeans, Dress, Jacket, Sweater, Shirt, Shorts, Shoes
- Different garments require different amounts of fabric

**Impact varies by:**

- Weight of the garment
- Amount of material needed
- Jeans have 2.5x impact of a T-shirt

### Step 3: Select Production Region

- Choose where the garment was manufactured
- Transportation adds to carbon footprint
- Options: Local, Domestic, Asia, Africa, Europe

**Regional impacts:**

- Local Production: 0.5 kg carbon (minimal transport)
- Asia Manufacturing: 2.5 kg carbon (long-distance shipping)
- Europe Manufacturing: 1 kg carbon (moderate distance)

### Step 4: Adjust Brand Sustainability Score

- Use the slider (1-10) to rate the brand's environmental practices
- 1 = Poor sustainability efforts
- 10 = Excellent sustainability practices
- Higher scores reduce overall impact

**What this measures:**

- Brand's environmental certifications
- Manufacturing practices
- Labor standards
- Transparency reports

### Step 5: Select Price Range

- Choose your price category
- Higher-priced items typically last longer (lower per-use impact)
- Options: Budget, Mid-Range, Premium, Luxury

**Why price matters:**

- Budget items wear out faster (higher per-use impact)
- Premium/Luxury items last longer (lower per-use impact)
- Cost-per-wear is important for sustainability

### Step 6: View Results

- Click "Calculate Impact" button
- Automatic smooth scroll to results section
- See detailed metrics and recommendations
- Understand your garment's environmental footprint

### Step 7: Assess Another Garment

- Click "Assess Another Garment" to reset and try again
- All fields clear and results hide
- Compare different clothing choices

---

## 🔧 Technical Implementation

### Environmental Impact Calculation

The tool considers multiple factors:

**Material Impact**

- Water usage in production (liters)
- Carbon emissions (kg CO₂)
- Chemical pollution rating
- Waste generated (kg)

**Examples:**

- Cotton T-shirt: 2,700 liters water (high water use)
- Recycled Material: 30 liters water (sustainable)
- Linen: 1.8 kg carbon (low emissions)

**Garment Weight & Type**

- Different garments require different amounts of fabric
- Jeans (2.5x factor) > Shirt (1.2x factor) > T-Shirt (1x factor)
- Shoes, Jackets, Dresses have their own multipliers

**Production Location Impact**

- Local production: 0.5 kg carbon (minimal transport)
- Asia manufacturing: 2.5 kg carbon (long-distance shipping)
- Europe manufacturing: 1 kg carbon (moderate distance)

**Brand Sustainability Score**

- Higher scores (8-10) indicate responsible brands
- Lower scores (1-3) indicate brands with poor practices
- Directly reduces calculated carbon and chemical impact

**Price & Longevity**

- Budget items: 0.8x longevity (worn less, higher per-use impact)
- Luxury items: 1.8x longevity (worn longer, lower per-use impact)

### Scoring System (0-100)

**Calculation Method:**

- Water Score: Lower usage = Higher score
- Carbon Score: Lower emissions = Higher score
- Chemical Score: Lower toxins = Higher score
- Waste Score: Less waste = Higher score
- **Overall Score = Average of all four metrics**

**Score Interpretation:**

- **80-100**: 🌿 Excellent Choice! Minimal environmental impact
- **60-79**: ✌️ Good Choice. Moderate impact, room for improvement
- **40-59**: ⚠️ Fair Choice. Significant impact, consider alternatives
- **0-39**: ❌ High Impact. Substantial footprint, look for better options

### Data Structure Example

```javascript
// Cotton impact metrics per garment
cotton: {
    water: 2700,      // liters per shirt
    carbon: 2.5,      // kg CO2
    chemicals: 8,     // pollution rating
    waste: 0.2        // kg waste
}

// Garment type multipliers
jeans: {
    weight: 0.6,      // 600g of fabric
    factor: 2.5       // multiply base impact by 2.5
}
```

## 🌟 Features & Functionality

### Form Features

- **5 Select/Input Fields** for comprehensive data collection
- **Real-time Slider Updates** showing brand score
- **Visual Feedback** - borders change color on selection
- **Input Validation** - all fields required before calculation
- **Error Alerts** - helpful messages for incomplete submissions

### Results Display

- **Metric Cards** - 4 color-coded cards with icons and descriptions
  - Water (Blue) - shows liters consumed
  - Carbon (Red) - shows kg CO₂ emissions
  - Chemicals (Orange) - shows pollution rating
  - Waste (Celadon) - shows kg of waste
- **Animated Progress Circle** - SVG-based with gradient fill
- **Score Interpretation** - emoji + title + personalized message
- **Breakdown Section** - 4-item grid showing component analysis
- **Recommendations** - 5-8 personalized tips based on selections

### Interactive Elements

- **Hover Effects** - cards lift up on mouse hover
- **Button Animations** - smooth color transitions
- **Smooth Scrolling** - automatic scroll to results
- **Form Validation** - prevents incomplete submissions
- **Reset Functionality** - clear all selections instantly

### Responsive Design

- **Desktop (1024px+)**: Full 2-column layout with side-by-side sections
- **Tablet (768px-1023px)**: Optimized 2-column for metrics, single column for content
- **Mobile (480px-767px)**: Single column layout, touch-friendly
- **Small Mobile (<480px)**: Compact spacing, larger touch targets

### Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 📊 Example Results

### Low Impact Garment

**Selection:** Recycled Material, T-Shirt, Local Production, Brand Score 9/10, Luxury

- Water: 30 liters
- Carbon: 0.75 kg CO₂
- Chemicals: 1.5
- Waste: 0.01 kg
- **Score: 95/100** 🌿 Excellent Choice!

### High Impact Garment

**Selection:** Leather, Jacket, Asia Manufacturing, Brand Score 2/10, Budget

- Water: 1500 liters
- Carbon: 12 kg CO₂
- Chemicals: 15
- Waste: 0.4 kg
- **Score: 28/100** ❌ High Impact

## 💡 Key Learning Outcomes

Students will understand:

1. **HTML Semantics** - Proper structure with header, main, sections
2. **CSS Mastery** - Grid layouts, Flexbox, animations, responsive design
3. **JavaScript Logic** - Form handling, calculations, DOM manipulation
4. **Data Visualization** - SVG animations, progress indicators
5. **UX/UI Principles** - Color theory, typography, accessibility
6. **Environmental Impact** - How fashion choices affect the planet

## 🎓 For Your Project Submission

### Grading Checklist

- ✅ Full HTML/CSS/JavaScript implementation
- ✅ Complex interactive functionality (calculations)
- ✅ Professional UI/UX design with celadon palette
- ✅ Responsive design (works on all devices)
- ✅ Smooth animations and transitions
- ✅ Educational content integration
- ✅ Real-time data calculations and logic
- ✅ Well-structured, commented code
- ✅ Form validation with error handling
- ✅ Semantic HTML with accessibility

### Areas to Highlight in Presentation

**1. Design Excellence**

- Custom celadon color palette research and application
- Consistent design system using CSS variables
- Modern glass-morphism and UI trends
- Smooth micro-interactions

**2. Technical Implementation**

- Complex environmental impact calculation algorithm
- Multi-factor analysis combining 5 user inputs
- Dynamic content generation
- SVG progress indicator with animation

**3. User Experience**

- Intuitive form flow with 5 logical steps
- Clear data visualization with metric cards
- Personalized recommendations based on selections
- Smooth scroll and auto-reveal functionality

**4. Functionality**

- Real-time form validation with visual feedback
- Advanced calculations with multiple variables
- Instant result generation
- Reset functionality for multiple assessments

**5. Code Quality**

- Well-organized with clear sections
- Comprehensive comments explaining logic
- DRY principle (Don't Repeat Yourself)
- Modular functions for reusability

## 🌍 Environmental Impact Data Sources

The impact values are based on:

- **World Bank** reports on textile industry
- **UN Environment Programme** (UNEP) - UNWEAR study
- **Ellen MacArthur Foundation** - circular economy research
- **Common textile knowledge** - industry standards
- **Environmental impact assessments** - academic sources

**Note:** These are simplified estimates for educational purposes. Real environmental impact varies significantly based on:

- Specific production methods
- Sustainability certifications (GOTS, Fair Trade, etc.)
- Supply chain practices
- Manufacturing facilities
- Dye houses used
- Energy sources
- Water treatment processes

## 🛠️ Customization Ideas

Enhance your project with these additions:

**Easy Additions:**

1. Add more materials with different impact values
2. Include certification filters (GOTS, Fair Trade, OEKO-TEX)
3. Add CO₂ comparisons (e.g., "equivalent to 50 miles driven")
4. Create a "sustainable alternatives" suggestion system
5. Add a dark mode toggle

**Medium Difficulty:**

1. Implement local storage to save past assessments
2. Create a comparison feature for two garments
3. Add charts showing impact breakdown (pie/bar charts)
4. Calculate lifetime environmental cost
5. Add filter/search functionality

**Advanced Features:**

1. Build a database of real brands and their scores
2. Create a washing/care impact calculator
3. Add lifecycle assessment (cradle-to-grave)
4. Implement user accounts and history
5. Create social sharing features
6. Add multilingual support

## 📝 Code Quality Standards

The code follows:

- **HTML**: Semantic markup with accessibility attributes
- **CSS**: BEM-like naming, CSS variables, organized sections
- **JavaScript**: ES6+ features, clear variable names, proper comments
- **Performance**: No dependencies, lightweight, optimized
- **Security**: No external API calls, local data only

## 🔐 Privacy & Security

- ✅ **No data collection** - Everything runs locally
- ✅ **No tracking** - No analytics or cookies
- ✅ **No external requests** - No API calls
- ✅ **Completely private** - All calculations happen in your browser
- ✅ **Offline capable** - Works without internet after first load

## 📚 File Breakdown

### index.html (12 KB)

- 1 header with logo
- 2 main sections (form + results)
- 4 info cards section
- 4 metric cards in results
- Footer with links
- Proper semantic HTML5 structure

### style.css (19 KB)

- 10+ color variables for celadon palette
- 4 major animations (gradient, float, bounce, etc.)
- Responsive design with 4 media queries
- Glass-morphism effects
- SVG progress circle styling
- 700+ lines of organized CSS

### script.js (16 KB)

- 9 materials with impact data
- 8 garment types with multipliers
- 5 production regions
- 4 price categories
- Complex calculation algorithm
- Recommendation generator
- Result display function
- Event listeners and validation

## 🎉 Why This Project Stands Out

1. **Real-World Application** - Actually helps with sustainability decisions
2. **Beautiful Design** - Celadon palette is unique and professional
3. **Complex Logic** - Multi-factor environmental calculations
4. **Smooth Experience** - Animations and transitions feel polished
5. **Fully Responsive** - Perfect on all screen sizes
6. **Educational Value** - Users learn about fashion impact
7. **Well-Documented** - Clear comments throughout code
8. **Professional Quality** - Looks like a real web application

## 📞 Troubleshooting

**Issue: CSS not loading**

- Solution: Make sure `style.css` is in the same folder as `index.html`
- Check file name spelling (case-sensitive on some systems)

**Issue: JavaScript not working**

- Solution: Verify `script.js` is in the same folder
- Check browser console for errors (F12 → Console tab)
- Make sure scripts are loaded after DOM elements

**Issue: Form not calculating**

- Solution: Fill in ALL 5 fields before clicking Calculate
- Check if all dropdowns have a selection (not the default placeholder)

**Issue: Animations not showing**

- Solution: Some browsers need hardware acceleration enabled
- Try a different browser to test
- Check if JavaScript is enabled in browser settings

**Issue: Not responsive on mobile**

- Solution: Check viewport meta tag is in HTML head
- Refresh page completely (Ctrl+Shift+R or Cmd+Shift+R)
- Test in actual mobile device or DevTools device mode

## 🚀 Deployment Options

You can host this for free on:

1. **GitHub Pages** - Free, static hosting
2. **Netlify** - Drag and drop deployment
3. **Vercel** - Optimized for web projects
4. **Firebase Hosting** - Google's hosting service
5. **Replit** - Online IDE with built-in hosting

Just upload all three files and get a shareable link!

## 📄 License

This project is created for educational purposes. Feel free to modify and enhance it for your coursework.

## ✨ Final Notes

This project demonstrates professional-grade web development skills:

- Modern design aesthetics
- Complex functionality implementation
- Responsive web design
- User experience optimization
- Code organization and comments
- Real-world problem solving
