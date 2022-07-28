import * as Styled from "./Category.style"

export default function Category({setForm, form, categories}) {
    return (
        <div>
            <Styled.Label>
                Categoria
                <Styled.Select onChange={
                    (e) => setForm({...form, category: {id: e.target.value}})
                }>
                    <Styled.Option value="hidden"/>
                    {categories?.map((category) => (
                        <Styled.Option key={category?.id} value={category?.id}>
                            {category?.title}
                        </Styled.Option>
                    ))}
                </Styled.Select>
            </Styled.Label>
        </div>
    )
}