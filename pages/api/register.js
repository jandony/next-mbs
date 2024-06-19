import connectToDatabase from "../../lib/mongoose";
import Customer from "../../models/Customer";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectToDatabase();

    let { name, email, username, password } = req.body;

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Add more validation as needed

    const newCustomer = new Customer({
      name,
      email,
      username,
      password,
    });

    await newCustomer.save();

    return res.status(201).json({ message: "Customer created successfully", customer: newCustomer });
  } catch (error) {
    console.error("Error creating customer:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
