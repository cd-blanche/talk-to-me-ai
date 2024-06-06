"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [text, setText] = useState("");
    let timeout;

    useEffect(() => {
        const handleKeyDown = (e) => {
            console.log(e.keyCode);
            clearTimeout(timeout);
            if (e.keyCode < 48 && e.Key !== " ") return;
            setText((prevText) => {
                return prevText + e.key;
            });
            timeout = setTimeout(() => {
                setText("");
            }, 1000);
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1>speak to me</h1>
            <h2>{text}</h2>
        </main>
    );
}