import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
  usertype: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  games: {
    level1: {
      level1: {
        type: String,
        default: "Let's think to begin",
      },
      question: {
        type: String,
        default:  "I'm round and shiny, and you can toss me like a ball. Find me in the drawer where you keep your favorite shawl.",
      },
      answer: {
        type: String,
        default: "Marble",
      },
      attempt: {
        type: Boolean,
        default: false,
      },
      timetaken: {
        type: Number,
        default: null,
      },
    },
    level2: {
      level2: {
        type: String,
        default: "Find way to go ahead",
      },
      question: {
        type: String,
        default: "I am a type of currency, a unit of value. Find me in the room where you watch a movie or a venue.",
      },
      answer: {
        type: String,
        default: "Dollar",
      },
      attempt: {
        type: Boolean,
        default: false,
      },
      timetaken: {
        type: Number,
        default: null,
      },
    },
    level3: {
      level3: {
        type: String,
        default: "Keep patience and think for solution",
      },
      question: {
        type: String,
        default: "I can be twisted, turned, and tied in a knot. Find me in the room where you bake or cook a lot.",
      },
      answer: {
        type: String,
        default: "Twine",
      },
      attempt: {
        type: Boolean,
        default: false,
      },
      timetaken: {
        type: Number,
        default: null,
      },
    },
    level4: {
      level4: {
        type: String,
        default: "Identify point to move close to win",
      },
      question: {
        type: String,
        default: "I'm a device that helps you see things far away. Find me in the room where you often relax and play.",
      },
      answer: {
        type: String,
        default: "Binoculars",
      },
      attempt: {
        type: Boolean,
        default: false,
      },
      timetaken: {
        type: Number,
        default: null,
      },
    },
    level5: {
      level5: {
        type: String,
        default: "You are very close to Win",
      },
      question: {
        type: String,
        default: "I'm small, rectangular, and have a screen that glows. Find me in the room where you sleep, and the nightlight shows.",
      },
      answer: {
        type: String,
        default: "Phone",
      },
      attempt: {
        type: Boolean,
        default: false,
      },
      timetaken: {
        type: Number,
        default: null,
      },
    },
    level6: {
      level6: {
        type: String,
        default: "Wow You are on last level",
      },
      question: {
        type: String,
        default: "I am the key to the treasure, and I'm hidden somewhere near. Find me in the room where you brush your teeth and wash your hair.",
      },
      answer: {
        type: String,
        default: "Hairbrush",
      },
      attempt: {
        type: Boolean,
        default: false,
      },
      timetaken: {
        type: Number,
        default: null,
      },
    },
  },
});

export const User = mongoose.model("User", schema);
