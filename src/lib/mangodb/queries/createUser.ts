import mongoose from "mongoose";
import  UserDatabase from "$lib/mangodb/models/userSchema";
import { variables } from "$lib/variables";
import type { decodedIdtoken } from "$lib/oauth2/types";


export default async function createUser(input : decodedIdtoken) {
    
    //* MONGOOSE CONFIG
    mongoose.connect(variables.VITE_MONGODB_URI);

    //* SERVER LINKED => DATABASE
    mongoose.connection.once("open", () => {
    console.log("Connected to mongo");
    });

    // Create new user
    const user = new UserDatabase ({

        // From Google
        googleId: input.sub,
        displayName: input.name,
        firstName: input.given_name,
        lastName: input.family_name,
        image: input.picture,
        // createdAt: ,
        email: input.email,
        // // From Form
        // country: string, // Required
        // introduction: string, // Required
        // interest: Array<string>,
        // groups: Array<string>,
        // // Default
        // eventsAttended: number,

    })

    await user.save();

}