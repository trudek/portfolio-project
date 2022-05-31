const mongoose = require('mongoose');

const playerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true],
    },
    rating: {
      type: Number,
    },
    futbin_id: {
      type: Number,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Player', playerSchema);
