// const skills:string[] = ['dev', 'devops']

// for(const item of skills){
//     console.log(item.toLocaleUpperCase());
// }

// const res = skills
// .filter((s:string)=> s !== 'testing')
// .map((s:string) => s + '!!!')
// .reduce((a, b) => a + b);

// console.log(res);

// const typedArr: readonly[number, string] = [1, 'wewew'];

// const newArr = typedArr

// console.log(newArr);





/* Запрос */
{
	"topicId": 5,
	"status": "published" // "draft", "deleted"
}
/* Ответ */
[
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
]

enum QuestionStatus{
Published = 'published',
Draft = 'draft',
Deleted = 'deleted'
}


async function getFaqs(req: {
    topicId: number; status: QuestionStatus
}): Promise <{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status?: QuestionStatus
    }[]>{
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
