import { users, type User, type InsertUser, type Lead, type InsertLead } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Lead management methods
  getLeads(): Promise<Lead[]>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLead(id: number): Promise<Lead | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leads: Map<number, Lead>;
  private userCurrentId: number;
  private leadCurrentId: number;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.userCurrentId = 1;
    this.leadCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Lead management methods
  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values()).sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.leadCurrentId++;
    const lead: Lead = { 
      ...insertLead, 
      id, 
      createdAt: new Date() 
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLead(id: number): Promise<Lead | undefined> {
    return this.leads.get(id);
  }
}

export const storage = new MemStorage();
