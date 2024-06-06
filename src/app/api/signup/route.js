import { User } from "@/app/models/User";
import { connectToDB } from "@/app/utils/database";
import { NextResponse } from "next/server"
import { isValidElement } from "react";

connectToDB();

export const POST = async (req)=>{

    try {
        const reqBody = await req.json();
        const {name,roll,email,password} = reqBody;
    
        if(!name || !email || !password || !roll)
        {
            return NextResponse.json({
                message:'fill all feilds'
            })
        }
        
        const rollStr = roll.replaceAll('-','').replaceAll('_','').replaceAll(' ','');
    
        const isLE =
          rollStr.includes("le") ||
          rollStr.includes("Le") ||
          rollStr.includes("LE") ||
          rollStr.includes("lE");
    
        const branchVal = {
          3: "CSE",
          1: "EEE",
          2: "MECH",
          4: "CIVIL",
        };
    
        let rollno, year;
        if (isLE) {
          rollno = parseInt(rollStr.slice(2));
          year = Math.floor(rollno / 1000) + 1;
        } else {
          rollno = parseInt(rollStr);
          year = Math.floor(rollno / 1000);
        }
        const branch = branchVal[Math.floor((rollno / 100) % 10)];
    

        const isExist = await User.findOne({$or:[{$and:[{roll},{year}]},{email}]})

        if(isExist)
            return NextResponse.json({
                message:'You are already registered.',
            })

        const newUser = await User.create({name,email,password,branch,year,roll:rollno,isLE})
    
        return NextResponse.json({
            message:'Signup Succede.',
            newUser
        })
    
    
    } catch (error) {
        return NextResponse.json({
            message:error.message
        })
    }
   
}