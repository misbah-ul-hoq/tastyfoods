const OrderCard = ({ menuItem }) => {
  const { name, image, recipe, price } = menuItem;
  return (
    <div className="relative m-4 max-w-sm overflow-hidden rounded shadow-lg">
      <span className="absolute right-3 top-3 bg-neutral px-3 py-1 font-bold text-neutral-content">
        ${price}
      </span>
      <img className="w-full max-w-[400px]" src={image} alt="Caeser Salad" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-700">{recipe}</p>
      </div>
      <div className="flex items-center justify-between px-6 pb-2 pt-4">
        <button className="btn border-0 border-b-2 border-[#BB8506] text-[#BB8506] hover:btn-neutral">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
