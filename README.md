# 💊 MedTrack

MedTrack is a sleek and user-friendly web application for tracking and managing your medicines. It allows users to upload medicine details, preview them in real time, receive expiry warnings, and view all stored medicines in a smart, categorized layout.

## 🚀 Features

- Add medicines with image, price, category, and expiry date
- Smart preview card with animation and expiry status
- Conditional input fields based on medicine type (Tablet, Syrup, Ointment)
- File upload with custom “Choose Image” interface
- Real-time expiry check with warning
- View all uploaded medicines with editing and deleting options

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla), EJS
- **Backend:** Node.js, Express.js (optional for data persistence)
- **Database:** MongoDB (optional)
- **Icons & Styles:** Font Awesome, Custom Dark Gradient Theme

## 🧪 Key Functionalities

- 🎯 Conditional Inputs:
  - If **Tablet**, ask for number of tablets
  - If **Syrup**, ask for bottles
  - If **Ointment**, ask for pieces
- 📦 File Upload:
  - Only image files are allowed
  - Custom UI with preview and filename shown
- 🔔 Real-Time Expiry Warning:
  - Displays a red or green status based on expiry date
- 🧾 Medicine Preview Card:
  - Comes in with animation from the right and shows all details instantly

## 📸 Screenshot

![MedTrack Preview](coming soon)


## 📌 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MedTrack.git
   cd MedTrack
   ```
2. Install Dependencies
   ```bash
   npm install
   ```
3. Run the app
   ```bash
   node app.js
   ```
4. Visit the localhost

## 🤝 Contributions
Pull requests and suggestions are welcome! If you'd like to contribute, feel free to fork the repo and submit a PR.

## 📜 License
This project is licensed under the MIT License.

