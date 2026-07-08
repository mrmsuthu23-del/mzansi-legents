"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function RegisterPage() {
	  const [email, setEmail] = useState("");
	    const [password, setPassword] = useState("");
	      const [message, setMessage] = useState("");

	        async function register() {
	        	    try {
	        	    	      await createUserWithEmailAndPassword(auth, email, password);
	        	    	            setMessage("Account created! Welcome to Mzansi Legents 🇿🇦");
	        	    	                } catch (error) {
	        	    	                	      setMessage("Registration failed. Try again.");
	        	    	                	          }
	        	    	                	            }

	        	    	                	              return (
	        	    	                	              	    <main className="min-h-screen flex flex-col items-center justify-center bg-green-700 text-white p-6">
	        	    	                	              	          <h1 className="text-4xl font-bold mb-8">
	        	    	                	              	                  🇿🇦 Join Mzansi Legents
	        	    	                	              	                        </h1>

	        	    	                	              	                              <input
	        	    	                	              	                                      className="p-3 mb-4 rounded text-black w-full max-w-sm"
	        	    	                	              	                                              placeholder="Email"
	        	    	                	              	                                                      type="email"
	        	    	                	              	                                                              value={email}
	        	    	                	              	                                                                      onChange={(e) => setEmail(e.target.value)}
	        	    	                	              	                                                                            />

	        	    	                	              	                                                                                  <input
	        	    	                	              	                                                                                          className="p-3 mb-4 rounded text-black w-full max-w-sm"
	        	    	                	              	                                                                                                  placeholder="Password"
	        	    	                	              	                                                                                                          type="password"
	        	    	                	              	                                                                                                                  value={password}
	        	    	                	              	                                                                                                                          onChange={(e) => setPassword(e.target.value)}
	        	    	                	              	                                                                                                                                />

	        	    	                	              	                                                                                                                                      <button
	        	    	                	              	                                                                                                                                              onClick={register}
	        	    	                	              	                                                                                                                                                      className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold"
	        	    	                	              	                                                                                                                                                            >
	        	    	                	              	                                                                                                                                                                    Create Account 🎮
	        	    	                	              	                                                                                                                                                                          </button>

	        	    	                	              	                                                                                                                                                                                <p className="mt-4">{message}</p>
	        	    	                	              	                                                                                                                                                                                    </main>
	        	    	                	              	                                                                                                                                                                                      );
	        	    	                	              	                                                                                                                                                                                      }
	        	    	                	              )
	        	    	                }
	        	    }
	        }
}
