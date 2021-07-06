import React from "react";

export default function Home() {
  return (
    <footer className="bg-green-600 text-center fixed inset-x-0 bottom-0">
      <div className="container mx-auto flex justify-center">
        <div className="inflex-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-red-800 text-1xl font-bold cursive tracking-widest">
          Copyright © {new Date().getFullYear()}
          <span> All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
