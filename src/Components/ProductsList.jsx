import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductsList = () => {
    let [products] = useState([
            {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "stock": 94,
            "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            },
            {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "stock": 34,
            "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
            },
            {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "stock": 36,
            "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
            },
            {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "stock": 123,
            "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
            },
            {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "stock": 32,
            "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
            },
            {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "stock": 83,
            "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
            },
            {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "stock": 50,
            "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
            },
            {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "stock": 68,
            "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
            },
            {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "stock": 96,
            "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
            },
            {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "stock": 89,
            "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
            },
            {
            "id": 11,
            "title": "perfume Oil",
            "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            "stock": 65,
            "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
            },
            {
            "id": 12,
            "title": "Brown Perfume",
            "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "stock": 52,
            "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
            },
            {
            "id": 13,
            "title": "Fog Scent Xpressio Perfume",
            "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            "stock": 61,
            "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
            },
            {
            "id": 14,
            "title": "Non-Alcoholic Concentrated Perfume Oil",
            "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
            "stock": 114,
            "thumbnail": "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
            },
            {
            "id": 15,
            "title": "Eau De Perfume Spray",
            "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
            "stock": 105,
            "thumbnail": "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
            },
            {
            "id": 16,
            "title": "Hyaluronic Acid Serum",
            "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
            "stock": 110,
            "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
            },
            {
            "id": 17,
            "title": "Tree Oil 30ml",
            "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
            "stock": 78,
            "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
            },
            {
            "id": 18,
            "title": "Oil Free Moisturizer 100ml",
            "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
            "stock": 88,
            "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
            },
            {
            "id": 19,
            "title": "Skin Beauty Serum.",
            "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
            "stock": 54,
            "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
            },
            {
            "id": 20,
            "title": "Freckle Treatment Cream- 15gm",
            "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
            "stock": 140,
            "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
            },
            {
            "id": 21,
            "title": "- Daal Masoor 500 grams",
            "description": "Fine quality Branded Product Keep in a cool and dry place",
            "stock": 133,
            "thumbnail": "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
            },
            {
            "id": 22,
            "title": "Elbow Macaroni - 400 gm",
            "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
            "stock": 146,
            "thumbnail": "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
            },
            {
            "id": 23,
            "title": "Orange Essence Food Flavou",
            "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
            "stock": 26,
            "thumbnail": "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
            },
            {
            "id": 24,
            "title": "cereals muesli fruit nuts",
            "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
            "stock": 113,
            "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
            },
            {
            "id": 25,
            "title": "Gulab Powder 50 Gram",
            "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
            "stock": 47,
            "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
            },
            {
            "id": 26,
            "title": "Plant Hanger For Home",
            "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
            "stock": 131,
            "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
            },
            {
            "id": 27,
            "title": "Flying Wooden Bird",
            "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
            "stock": 17,
            "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
            },
            {
            "id": 28,
            "title": "3D Embellishment Art Lamp",
            "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
            "stock": 54,
            "thumbnail": "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
            },
            {
            "id": 29,
            "title": "Handcraft Chinese style",
            "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
            "stock": 7,
            "thumbnail": "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
            },
            {
            "id": 30,
            "title": "Key Holder",
            "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
            "stock": 54,
            "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
            }]);
            return (
                console.log(products),
                <div className="row">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            );
        };
        
        export default ProductsList;