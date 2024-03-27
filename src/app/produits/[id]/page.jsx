
async function getProduct(){
    const res = await fetch('https://www.freetogame.com/api/games')
    return res.json()
}

export default async function Product({params}) {
    const products = await getProduct()

    return(
        <h1>cggg</h1>
    )

}