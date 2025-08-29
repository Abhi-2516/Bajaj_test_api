# 🚀 Full Stack REST API – VIT Assignment

## 📌 Project Overview

This project is built as part of the **Full Stack Development Assignment (VIT)**.
The goal is to develop and host a **REST API** that processes an input array and returns useful information such as numbers, alphabets, special characters, and user details.

## 🛠 Tech Stack

* **Backend:** Node.js (Express)
* **Hosting:** Railway 
* **Language:** JavaScript

## 📂 Features

* Accepts an **array** as input via `POST` request.
* Returns:

  * ✅ Status of operation (`is_success`)
  * 👤 User ID (format: `fullname_ddmmyyyy`)
  * 📧 Email ID
  * 🎓 College Roll Number
  * 🔢 Array of even numbers
  * 🔢 Array of odd numbers
  * 🔠 Array of alphabets (converted to **UPPERCASE**)
  * 🔣 Array of special characters
  * ➕ Sum of numbers
  * 🔄 Concatenation of alphabets in **reverse order with alternating caps**

## 📬 API Endpoint

**Method:** `POST`
**Route:** `/bfhl`

Example hosted URL:

```bash
https://bajajtestapi-production.up.railway.app/bfhl
```

## 📤 Example Request

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## 📥 Example Response

```json
{
  "is_success": true,
  "user_id": "abhishek_yadav_31122003",
  "email": "abhishekyadav2022@vitbhopal.ac.in",
  "roll_number": "22BEY10122",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## ⚙️ Run Locally

Clone the project:

```bash
git clone https://github.com/your-username/fullstack-vit-api.git
cd fullstack-vit-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

## 👤 Author

**Abhishek Yadav**

* 🎓 VIT Bhopal
* 📧 [abhishekyadav2022@vitbhopal.ac.in](mailto:abhishekyadav2022@vitbhopal.ac.in)
* 🆔 Roll Number: 22BEY10122

---

✨ Feel free to **star ⭐ this repo** if you find it useful!
