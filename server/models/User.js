// Simple in-memory user storage for demo
// In production, use MongoDB with Mongoose

let users = [];
let nextId = 1;

export class User {
  constructor(userData) {
    this.id = nextId++;
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static async findByEmail(email) {
    return users.find(user => user.email === email);
  }

  static async findById(id) {
    return users.find(user => user.id === parseInt(id));
  }

  async save() {
    const existingUserIndex = users.findIndex(user => user.id === this.id);
    if (existingUserIndex !== -1) {
      users[existingUserIndex] = this;
    } else {
      users.push(this);
    }
    return this;
  }

  static async create(userData) {
    const user = new User(userData);
    return user.save();
  }

  toJSON() {
    const { password, ...userWithoutPassword } = this;
    return userWithoutPassword;
  }
}