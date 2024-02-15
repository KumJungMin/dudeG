// TODO: 몽고 DB 연결하면서 테스트 함수 제거하기
export async function getTestData() {
  const response = await fetch('/api/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}
