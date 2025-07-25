## **Quick Setup Instructions**

### **Option 1: Manual Setup**

- If you prefer to set it up manually:

<br>

#### **1. Create a new Next.js project**
```shellscript
npx create-next-app@latest premium-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd premium-portfolio
```

#### **2. Install required dependencies**

```shellscript
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-select @radix-ui/react-slot
npm install tailwindcss-animate
```

#### **3. Copy the files**

- Copy all the code files from the project above
- Replace the default files in your Next.js project


#### **4. Update package.json**

Make sure your `package.json` includes these dependencies:

```json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.294.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-slot": "^1.0.2",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

#### **5. Run the development server**

```shellscript
npm run dev
```

#### **6. Open your browser**

Navigate to `http://localhost:3000` to see your portfolio!

---

## **Project Structure**

```plaintext
premium-portfolio/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio component
├── components/ui/           # Shadcn/ui components (auto-generated)
├── tailwind.config.js       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

---

## **Key Features Included**

✅ **Dark/Light Mode Toggle**✅ **Responsive Design** (Mobile-first)✅ **Smooth Animations** (Framer Motion)✅ **Glassmorphism Effects**✅ **Auto-playing Testimonials**✅ **Smooth Scrolling Navigation**✅ **Contact Form** (ready for backend integration)✅ **SEO Optimized**✅ **Performance Optimized**

---

## ️ **Customization**

### **Update Personal Information**

Edit the data in `app/page.tsx`:

- Change name, title, and description
- Update contact information
- Modify skills, projects, and testimonials
- Replace placeholder images with real ones


### **Add Your Images**

Replace placeholder images in the `public/` folder:

- Profile photos
- Project screenshots
- Background images


### **Customize Colors**

Modify the color scheme in `tailwind.config.js` or use CSS variables in `globals.css`.

---

## **Deployment**

### **Deploy to Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy with one click!


### **Other Deployment Options**

- **Netlify**: Connect GitHub repo
- **Railway**: Deploy directly from GitHub
- **AWS/DigitalOcean**: Build and deploy manually
