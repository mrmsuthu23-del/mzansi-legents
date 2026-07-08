"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
	  const [email, setEmail] = useState("");
	    const [password, setPassword] = useState("");
	      const [message, setMessage] = useState("");

	        async function login() {
	        	    try {
	        	    	      await signInWithEmailAndPassword(auth, email, password);
	        	    	            setMessage("Welcome to Mzansi Legents 🇿🇦");
	        	    	                } catch (error) {
	        	    	                	      setMessage("Login failed. Check your email and password.");
	        	    	                	          }
	        	    	                	            }

	        	    	                	              return (
	        	    	                	              	    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
	        	    	                	              	          <h1 className="text-4xl font-bold mb-8">
	        	    	                	              	                  🇿🇦 Mzansi Legents Login
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
	        	    	                	              	                                                                                                                                              onClick={login}
	        	    	                	              	                                                                                                                                                      className="bg-green-600 px-8 py-3 rounded-xl font-bold"
	        	    	                	              	                                                                                                                                                            >
	        	    	                	              	                                                                                                                                                                    Login 🎮
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
