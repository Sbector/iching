export default function question() {
    return (
        <div>
            <label htmlFor="question">Enter your question </label><br/>
            <textarea id="question" type="text" name="question" className="w-3/4 bg-gray-200 dark:bg-gray-300 dark:text-black"/>
        </div>
    )
}