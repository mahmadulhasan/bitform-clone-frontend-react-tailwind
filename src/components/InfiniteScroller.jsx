import React, { useEffect } from "react";

const InfiniteScroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const inner = scroller.querySelector(".scroller__inner");
      const items = Array.from(inner.children);

      // Duplicate for infinite looping
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", true);
        inner.appendChild(clone);
      });
    });
  }, []);

  return (
    <div className="scroller" data-speed="fast">
      <ul className="scroller__inner">
        <li><img src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68788e5ae54877988e1759e7_Preview%20Single%20Card%20Image2.jpg" /></li>
        <li><img src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68788e5a5ee9d456b6bb8ae9_Preview%20Single%20Card%20Image1.jpg" /></li>
        <li><img src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68788e5a5f43e405b8970a8f_Preview%20Single%20Card%20Image3.jpg" /></li>
        <li><img src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68788e5a6fd9e1575a9656c5_Preview%20Single%20Card%20Image5.jpg" /></li>
        <li><img src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68788e5a31be72c5f70c7ee4_Preview%20Single%20Card%20Image4.jpg" /></li>
      </ul>
    </div>
  );
};

export default InfiniteScroller;
