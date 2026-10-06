"use client";
import { useEffect } from "react";

export default function ProgressAnimator() {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-fill');
    const timer = setTimeout(() => {
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) bar.style.width = width + '%';
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
