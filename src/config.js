export const IMG_CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FilterRestaura=(searchInput,allrestaura)=>{
      const filterData=allrestaura.filter((res)=>{
        return res?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase());
        
    })
    
    return filterData;
};
