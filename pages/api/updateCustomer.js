import connectToDatabase from '../../lib/mongoose';
import Customer from '../../models/Customer';
// import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const { id, name, email, username } = req.body;

    // Find the customer by their ID
    const customer = await Customer.findById(id);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Update customer's information
    if (name) customer.name = name;
    if (email) customer.email = email;
    if (username) customer.username = username;
    // if (password) {
    //   // Encrypt new password
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   customer.password = hashedPassword;
    // }

    // Save the updated customer information
    await customer.save();

    return res
      .status(200)
      .json({ message: 'Customer updated successfully', customer });
  } catch (error) {
    console.error('Error updating customer:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
