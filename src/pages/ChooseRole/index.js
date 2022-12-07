import React from 'react'
import { useState, useEffect } from "react";
import student from "../../assets/pics/student1.png";
import tutor from "../../assets/pics/tutor1.png";

export default function ChooseRole() {
    return(
        <div class="flex items-center justify-center h-screen font-body">
    
        <div class="bg-white text-white font-bold rounded-xl border shadow-lg p-10">
            <div class="font-bold text-6xl text-primary-100 text-center py-2">
                Who are you?
            </div>
            <div class="flex flex-row items-center justify-center mt-4">
                <a 
                    href="/signupstudent"
                    class="h-72 w-72 bg-white-100 border-2 shadow-sm rounded-lg text-center text-3xl p-2 cursor-pointer hover:bg-primary-80 hover:text-white-100 hover:shadow-md duration-150">
                        <img class="ml-10 mt-2 pt-2"
                        src={student}>
                    </img>
                    Student
                </a>
                <a 
                    href="/signuptutor"
                    class="h-72 w-72 bg-white-100 border-2 shadow-sm rounded-lg text-center text-3xl p-2 ml-6 cursor-pointer hover:bg-primary-80 hover:text-white-100 hover:shadow-md duration-150">
                    <img class="ml-10 mt-2 pt-2"
                    src={tutor}>
                    </img>
                    Tutor
                </a>
            </div>
        </div>
        
      </div>
        );
}