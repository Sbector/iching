export default function question() {
    return (
        <div>
            <label htmlFor="question" className="">Enter your question </label><br/>
            <textarea id="question" type="text" name="question" className="min-w-full bg-gray-200 dark:bg-gray-300 dark:text-black"/>
        </div>
    )
}