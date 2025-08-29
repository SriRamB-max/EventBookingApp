# Event Booking App

A modern, responsive event booking application built with React.js and Bootstrap. This application allows users to browse events, search and filter by categories, and make bookings with an intuitive interface.

## 🚀 Features

### Core Functionality
- **Event Browsing**: View all available events in a beautiful card-based layout
- **Advanced Search**: Real-time search by event title or location
- **Category Filtering**: Filter events by category (Technology, Music, Business, Art)
- **Booking System**: Complete booking flow with customer information capture
- **Booking Management**: View and manage all confirmed bookings
- **Responsive Design**: Fully responsive across all device sizes

### User Experience
- Clean, modern Bootstrap-based interface
- Intuitive navigation with booking counter
- Modal-based booking forms
- Real-time price calculations
- Form validation and user feedback
- Professional icons and visual elements

## 🛠️ Technologies Used

- **Frontend Framework**: React.js (Functional Components with Hooks)
- **UI Framework**: Bootstrap 5.3.0
- **Icons**: Bootstrap Icons 1.7.2
- **State Management**: React useState Hook
- **Styling**: Bootstrap CSS Classes
- **Images**: Unsplash API for sample event images

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd event-booking-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install react react-dom
   # or
   yarn add react react-dom
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🏗️ Project Structure

```
event-booking-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── EventBookingApp.js    # Main application component
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## 📱 Component Architecture

### Main Components

#### `EventBookingApp`
The main application component that manages all state and renders the entire application.

#### `EventCard`
Reusable component for displaying individual event information in a card format.

#### `BookingModal`
Modal component for handling the booking process with form validation.

#### `MyBookings`
Component for displaying user's confirmed bookings with detailed information.

## 🎯 Key Features Breakdown

### Event Display
- **Grid Layout**: Responsive card-based event display
- **Event Information**: Title, date, time, location, price, and available seats
- **Category Tags**: Visual category indicators
- **High-Quality Images**: Professional event images from Unsplash

### Search & Filter System
- **Real-time Search**: Instant filtering as you type
- **Multiple Search Fields**: Search by event title or location
- **Category Filter**: Dropdown filter for event categories
- **Results Counter**: Shows number of matching events

### Booking Process
- **Modal Interface**: Clean modal-based booking form
- **Customer Information**: Name, email, and phone number capture
- **Ticket Selection**: Choose number of tickets (1-5)
- **Price Calculation**: Automatic total price calculation
- **Validation**: Form validation with user feedback

### Booking Management
- **Booking History**: View all confirmed bookings
- **Detailed Information**: Complete booking details display
- **Status Tracking**: Booking confirmation status
- **Navigation Counter**: Real-time booking count in navigation

## 🔧 Configuration

### Sample Data
The application includes sample event data for demonstration. You can modify the events array in the component to add your own events:

```javascript
const [events] = useState([
  {
    id: 1,
    title: "Your Event Title",
    date: "YYYY-MM-DD",
    time: "HH:MM AM/PM",
    location: "Event Location",
    price: 299,
    description: "Event description",
    image: "image-url",
    availableSeats: 150,
    category: "Category"
  }
  // Add more events...
]);
```

### Customization Options
- **Categories**: Modify the `categories` array to add/remove event categories
- **Styling**: Customize Bootstrap classes for different visual themes
- **Validation**: Extend form validation rules in `handleBookingSubmit`
- **Images**: Replace Unsplash URLs with your own event images

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Heroku**: Deploy with buildpack for React apps

## 🔮 Future Enhancements

### Planned Features
- **User Authentication**: Login/signup system
- **Payment Integration**: Stripe/PayPal payment processing
- **Email Notifications**: Booking confirmation emails
- **Calendar Integration**: Add events to personal calendar
- **Reviews & Ratings**: User feedback system
- **Event Creation**: Allow organizers to create events
- **Advanced Filtering**: Date range, price range filters
- **Social Sharing**: Share events on social media

### Technical Improvements
- **Backend Integration**: Connect to REST API or GraphQL
- **Database**: Persistent data storage
- **State Management**: Redux or Context API for complex state
- **Testing**: Unit and integration tests
- **PWA**: Progressive Web App capabilities
- **SEO**: Server-side rendering with Next.js

## 🐛 Known Issues

- **Data Persistence**: Bookings are stored in component state (lost on refresh)
- **Image Loading**: External images may load slowly
- **Browser Compatibility**: Requires modern browser for full functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- ** Sriram Balamurugan ** - Initial work - [MyGitHub](https://github.com/SriramB-max)

## 🙏 Acknowledgments

- Bootstrap team for the excellent UI framework
- Unsplash for providing beautiful stock images
- React team for the amazing library
- Bootstrap Icons for the comprehensive icon set

## 📞 Support

If you have any questions or need help with setup, please:
- Open an issue in the repository
- Check the documentation
- Contact the development team

---

**Made with ❤️ using React.js and Bootstrap**
