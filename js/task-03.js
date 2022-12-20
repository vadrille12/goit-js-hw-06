const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

galleryRef.style.listStyle = "none";
galleryRef.style.dispay = "flex";
galleryRef.style.gap = "15px";
galleryRef.style.flexDirection = "row";

const galleryCardRef = ({ url, alt } = {}) => {
  const imagesListRef = `<li><img src = '${url}' alt = '${alt}' width = '200px' height = '125px'></li>`;
  return imagesListRef;
};

const gallaryLiRef = images.map(galleryCardRef).join("");

galleryRef.insertAdjacentHTML("beforeend", gallaryLiRef);

console.log(galleryRef);
