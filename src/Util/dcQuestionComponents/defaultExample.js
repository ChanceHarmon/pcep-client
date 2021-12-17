function defaultExample() {
  return (

    <div data-datacamp-exercise data-lang="python">
      <code data-type="pre-exercise-code">
        # no pec
      </code>
      <code data-type="sample-code">
        # Create a variable a, equal to 5<br />
        # Print out a
      </code>
      <code data-type="solution">
        # Create a variable a, equal to 5<br />
        a = 5

        # Print out a<br />
        print(a)
      </code>
      <code data-type="sct">
        test_object("a")<br />
        test_function("print")<br />
        success_msg("Great job!")
      </code>
      <div data-type="hint">
        Use the assignment operator (<code>=</code>) to create the variable <code>a</code>.
      </div>
    </div>
  )
}

export default defaultExample;