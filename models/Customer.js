import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    accountActivity: {
      company_news: {
        type: Boolean,
        default: true,
      },
      meetups: {
        type: Boolean,
        default: true,
      },
      opportunities: {
        type: Boolean,
        default: false,
      },
      newsletters: {
        type: Boolean,
        default: false,
      },
    },
    bio: {
      type: String,
      default: "Your bio goes here...",
    },
    career: {
      type: String,
      default: "Job Title",
    },
    city: {
      type: String,
      default: "City",
    },
    country: {
      type: String,
      default: "United States",
    },
    notifications: {
      company_news: {
        type: Boolean,
        default: true,
      },
      meetups: {
        type: Boolean,
        default: true,
      },
      opportunities: {
        type: Boolean,
        default: true,
      },
      newsletters: {
        type: Boolean,
        default: true,
      },
    },
    phone: {
      type: String,
      default: "111-222-3333",
    },
    profileCoverImage: {
      type: String,
      default: "https://images.unsplash.com/3/doctype-hi-res.jpg?q=80&w=2065&auto=form…",
    },
    profileImage: {
      type: String,
      default: "/img/profile-placeholder.jpg",
    },
    role: {
      type: String,
      default: "customer",
    },
    skills: {
      type: Array,
    },
    socialProfiles: {
      facebook: {
        type: String,
        default: "",
      },
      instagram: {
        type: String,
        default: "",
      },
      linkedin: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  },
  { collection: "customers" }
);

export default mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
