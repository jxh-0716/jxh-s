interface FaqCardProps {
    data: {
        question: string;
        answer: string;
    };
}
interface FaqProps {
    data: {
        title: string;
        faq_card: Array<{
            question: string;
            answer: string;
        }>
    };
}
const Faq = ({data}:FaqProps) => {
    const { title, faq_card } = data;
    return (
      <section className="px-52 bg-zinc-950 pt-20 pb-36">
        <h2 className="text-4xl font-bold text-center mb-20">{title}</h2>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
          {faq_card.map((f) => (
            <FaqCard data={f} key={f.question} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Faq;
  
  const FaqCard = ({ data }:FaqCardProps) => {
    const { question, answer } = data;
    return (
      <div className="lg:col-start-1 lg:col-end-3 xl:col-auto">
        <div className="flex flex-col justify-between w-full h-full px-5 rounded-2xl py-5 bg-neutral-800">
          <h3 className="text-2xl text-gray-400 pb-2">{question}</h3>
          <p className="text-xl leading-normal">{answer}</p>
        </div>
      </div>
    );
  };
  