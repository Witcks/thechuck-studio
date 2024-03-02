export async function fetchData() {
  try {
    const response = await fetch('../content.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
  }
}
