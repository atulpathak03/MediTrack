# 🏥 MediTrack – MERN Stack Healthcare Management System

MediTrack is a full-stack healthcare management web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It offers a robust platform for patients, doctors, and administrators to manage healthcare activities seamlessly.

---

## 🚀 Features

### 🔒 Secure Authentication & Authorization
- Role-based login (Admin / Doctor / Patient)
- Encrypted password storage using **bcrypt**
- JWT-based secure sessions

### 📅 Appointment Booking
- Calendar view for booking and managing appointments
- Real-time availability display for doctors and clinics

### 🧾 Medical Records & Timeline
- Upload, store, and organize medical documents (PDFs, images, etc.)
- Timeline view of patient’s medical history and reports

### 🏥 Doctor & Clinic Profiles
- Dedicated profile pages for doctors with:
  - Specialization
  - Availability schedule
  - Affiliated clinic information

### ⏰ Reminders & Notifications
- Appointment reminders via email or browser notifications
- Alerts for medical report updates or schedule changes

### 📄 QR Code Health Reports (Bonus)
- Generate QR codes for quick access to health records
- Scan to view reports securely

### 🔄 Real-Time Updates with Socket.IO (Bonus)
- Live appointment updates for doctors/admins
- Instant notification for patient bookings or cancellations

---

## 🛠️ Tech Stack

| Tech          | Description                         |
|---------------|-------------------------------------|
| MongoDB       | NoSQL database for storing data     |
| Express.js    | Backend framework on Node.js        |
| React.js      | Frontend SPA with dynamic routing   |
| Node.js       | JavaScript runtime for the backend  |
| Socket.IO     | Real-time bidirectional event communication |
| Cloudinary    | For medical file/image storage      |
| JWT / bcrypt  | Authentication & encryption         |
| QRCode.js     | Generate QR codes for health data   |
| FullCalendar  | Interactive calendar for appointments |

---

## 📁 Project Structure

```
backend/
  ├── src/
  │   ├── controllers/
  │   ├── middleware/
  │   ├── models/
  │   ├── routes/
  │   ├── utils/
  │   └── app.js
  ├── public/
  ├── package.json
  └── README.md
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/medi-track.git
   ```

2. Navigate to the project directory:
   ```
   cd medi-track
   ```

3. Install dependencies:
   ```bash
   