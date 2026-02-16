import { useState } from "react";
import Image from "next/image";

import { NevbarUl, Nevbarli } from "./nevbarComponents";
import Link from "next/link";

function Nevbar({ data }) {
  const [check, setcheck] = useState(0);
  const toggleActive = {
    backgroundColor: "lightblue",
    height: "30px",
    flexDirection: "row",
    minWidth: "5rem",
    gap: "10px",
    fontSize: "small",
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setcheck(-1);
    });
  }
  return (
    <NevbarUl>
      {data.map((content, index) => {
        return (
          <li
            style={{
              listStyle: "none",
            }}
            key={index}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={content.Link}
            >
              <Nevbarli
                onClick={() => {
                  setcheck(index);
                }}
                style={check == index ? toggleActive : {}}
              >
                <Image
                  src={`/icons8-${content.img}-32.png`}
                  height={25}
                  alt="img"
                  width={25}
                  priority
                />
                {content.Name}
              </Nevbarli>
            </Link>
          </li>
        );
      })}
    </NevbarUl>
  );
}

export default Nevbar;
