export default function CategoryItems({ item }) {

  return (
    <div className={`size-full flex justify-center ${item.categoryIcon !== 'abzar (26).png' && 'dark:bg-white'} items-center ${item.categoryIcon == 'abzar (26).png' && 'bg-primaryColor'}`}>
      <img className="" src={`/photo/${item.categoryIcon}`} alt="" />
    </div>
  )
}
