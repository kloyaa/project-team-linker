const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({

  //This creation of profile will refer to user id
  //ObjectId will be linked to user signed
  //If token is invalid you cannot create profile
  //Since profile is also depending on userId signed by JWT

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  // handle: {
  //     type: String,
  //     required: true,
  //     max: 40
  // },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String
  },
  skills: {
    type: [String]
  },
  bio: {
    type: String
  },
  githubUsername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String
      },
      fieldOfStudy: {
        type: String
      },
      from: {
        type: Date
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    gitHub: {
      type: String,
      required: true
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);