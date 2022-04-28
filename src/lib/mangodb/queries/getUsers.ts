import mongoose from "mongoose";
import  UserDatabase from "$lib/mangodb/models/userSchema";
import { variables } from "$lib/variables";
import type { decodedIdtoken } from "$lib/oauth2/types";

export default async function getUsers(){
        //* MONGOOSE CONFIG
        mongoose.connect(variables.VITE_MONGODB_URI);

        //* SERVER LINKED => DATABASE
        mongoose.connection.once("open", () => {
        console.log("Connected to mongo");
        });
    
        const users = await UserDatabase.find()

        return users
    
}