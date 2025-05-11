This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# 🛒 BuyAll – E-commerce Store (Student Project)

This is a responsive eCommerce web application built with **Next.js** as part of a student project at **Noroff**. The goal was to apply knowledge of **React**, **API consumption**, and **routing** to build a modern online store from scratch.

![BuyAll Screenshot](https://private-user-images.githubusercontent.com/94046432/442502297-96b76965-cf6a-4b2d-b65f-872b64b1bf6f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY5NjYzMTIsIm5iZiI6MTc0Njk2NjAxMiwicGF0aCI6Ii85NDA0NjQzMi80NDI1MDIyOTctOTZiNzY5NjUtY2Y2YS00YjJkLWI2NWYtODcyYjY0YjFiZjZmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTExVDEyMjAxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBlMjViYWE0MzNmODc3ZDg1ODMyMjc2OGEyMjIwOGM0Mzk3MTZmNzhlNjU5ZmYyMWQyN2Y0NjFhYTlhYzU2ZGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.16_YtO_JofNP997vr6hYvIBtlCg3_06nu7JvNQv8NL4) <!-- Replace with your actual image path -->

---

## 📖 Project Overview

BuyAll is a fictional eCommerce store built for learning purposes. It showcases core frontend skills using **Next.js**, integrating with the [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop). Users can browse products, view individual product details, add items to a cart, and complete a mock checkout. A contact form is also included with validation.

This project demonstrates the use of modern web development practices such as **dynamic routing**, **component-based architecture**, **state management**, and **form handling**.

---

## 🚀 Features

- **Homepage**
  - Fetches and displays all products from the API
  - Real-time search with look-ahead filtering

- **Product Page**
  - Displays detailed info including reviews, images, description, and pricing
  - Calculates and shows discount percentage if applicable
  - "Add to Cart" functionality

- **Cart Page**
  - Lists all items in cart with quantities and a running total
  - Includes a "Checkout" button

- **Checkout Success Page**
  - Confirmation message after checkout
  - Automatically clears cart
  - Link to return to homepage

- **Contact Page**
  - Form with client-side validation
  - Required fields: Full Name, Subject, Email, Message

- **Reusable Layout**
  - Shared layout with Header, Footer, and Cart icon displaying item count

- **Responsive Design**
  - Mobile-first approach using Tailwind CSS or CSS Modules (update this if needed)

---

## 🔧 Technologies Used

- [Next.js](https://nextjs.org/)
- React
- Tailwind CSS / CSS Modules (depending on your implementation)
- JavaScript
- ESLint & Prettier

---

## 📦 Installation

Make sure you have **Node.js v14+** installed.

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Contributing

Contributions are always welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- Author: Bjørn Håvard Steinnes
- Email: bjornhaavard@hotmail.com
