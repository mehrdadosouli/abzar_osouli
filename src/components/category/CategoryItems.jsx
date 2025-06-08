export default function CategoryItems({ item , categoryselect }) {

  return (
    <div className={`size-full flex justify-center ${item.name == categoryselect   && ' bg-primaryColor'} ${item.categoryIcon !== 'abzar (26).png' && 'dark:bg-white'} items-center ${item.categoryIcon == 'abzar (26).png' && 'bg-slate-500/50'}`}>
      <img classNamظe="w-2/3" src={`/photo/${item.categoryIcon}`} alt="" />
    </div>
  )
}


