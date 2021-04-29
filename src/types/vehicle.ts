export const Vehicle = {
  uuid: {
    type: String,
    unique: true,
    required: [true, "Please provide the product UUID"],
  },
  vin: {
    type: String,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  mileage: {
    type: String,
  },
  year: {
    type: Date,
  },
  price: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  createDate: {
    type: Date,
  },
  updateDate: {
    type: Date,
  },
};
