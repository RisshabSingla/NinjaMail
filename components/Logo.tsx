import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"} className="font-bold text-3xl text-purple-400 text-transparent bg-clip-text hover:cursor-pointer">
      NinjaMail
    </Link>
  );
}

export default Logo;
