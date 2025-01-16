export default function CategoryItems({item}) {
  
  return (
    <div className={`size-full flex justify-center items-center ${item.categoryIcon == 'abzar (26).png' && 'bg-primaryColor'}`}>  
       <img src={`../../../src/assets/photo/${item.categoryIcon}`} alt="" />
    </div>
  )
}
