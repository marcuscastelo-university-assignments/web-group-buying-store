import React from 'react'
import { getCategoriesInLayer, getCategoryInLayer } from '../util/local-storage'

type CategorySelectorProps = {
    layer: string,
    categoryID?: string,
    onChange: (chosenCategory: string) => void,
}

export default function CategorySelector(props: CategorySelectorProps) {
    const selfCategory = props.categoryID ? getCategoryInLayer(props.layer, props.categoryID) : undefined; 

    const childCategories = getCategoriesInLayer(props.layer + '1')?.filter(category => !props.categoryID || category.parent === props.categoryID);

    if ((childCategories?.length ?? 0) === 0) return <></>

    return (
        <React.Fragment>
            <select onChange={(e) =>props.onChange(e.target.value)} defaultValue="0" className="form-select mt-2"> 
                <option disabled value="0"> 
                        { selfCategory ?  `Subcategoria de ${selfCategory.name}`  : 'Categoria principal' } 
                </option>
                {
                    childCategories?.map(category => (
                        <option value={category.id}>
                            {category.name}
                        </option>
                    )) ?? ''
                }
            </select>
        </React.Fragment>
    )
}