export async function getProductBySlug(slug: string) {
    try {
        const res = await fetch(`http://localhost:3010/products?slug=${slug}`);
        const data = await res.json();

        return data[0] || null;
    } catch (error) {
        console.error('Lỗi khi fetch sản phẩm theo slug:', error);
        return null;
    }
}
