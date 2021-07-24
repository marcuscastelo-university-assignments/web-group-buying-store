import React from 'react'
import { getCategoriesInLayer, getCategoryInLayer } from '../util/local-storage'

type CategorySelectorProps = {
    layer: string,
    categoryId?: string,
    defaultValue?: string,
    onChange: (chosenCategory: string) => void,
}

export default function CategorySelector(props: CategorySelectorProps) {
    const selfCategory = props.categoryId ? getCategoryInLayer(props.layer, props.categoryId) : undefined;

    const childCategories = getCategoriesInLayer(props.layer + '1')?.filter(category => !props.categoryId || category.parent === props.categoryId);

    if ((childCategories?.length ?? 0) === 0) return <></>

    return (
        <React.Fragment>
            {/* {props.defaultValue ?? 'NO-DEFAULT'} */}
            <select
                onChange={(e) => props.onChange(e.target.value)}
                defaultValue={props.defaultValue　?? '0'}
                className="form-select mt-2"
            >
                <option disabled value="0">
                {selfCategory ? `Subcategoria de ${selfCategory.name}` : 'Categoria principal'}
                </option>
                {
                    childCategories.map(category => (
                        <option value={category.id}>
                            {category.name}
                        </option>
                    )) ?? ''
                }
            </select>
        </React.Fragment>
    )
}