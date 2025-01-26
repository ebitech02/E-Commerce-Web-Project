import React from "react";
import { CiMail } from "react-icons/ci";
import { LuConciergeBell } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { CiGift } from "react-icons/ci";

const Last = () => {
  return <div className="flex items-center flex-col sm:flex-row justify-center flex-wrap gap-10 bg-slate-50 mt-9 p-3 min-h-[250px]">
    <div className="flex flex-col items-center">
<CiMail size="30"  />
<p className="font-semibold">head </p>
<p>Be the first to know about exciting  </p>
<a href="">link</a>
</div>
    <div className="flex flex-col items-center">
<LuConciergeBell size="30" />
<p className="font-semibold">head </p>
<p>lorem lorem lorem lorem loem </p>
<a href="">link</a>
</div>
    <div className="flex flex-col items-center">
<CiCalendarDate size="30" />

<p>head </p>
<p>lorem lorem lorem lorem loem </p>
<a href="">link</a>
</div>
    <div className="flex flex-col items-center">
<CiGift size="30" />
<p>head </p>
<p>lorem lorem lorem lorem loem </p>
<a href="">link</a>
</div>

</div>;
};

export default Last;
