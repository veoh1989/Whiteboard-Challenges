Write a method to sort an array of strings so that all the anagrams are next to each other

Note - we can use a hash table to map the sorted version of a word to a list of its anagrams

example:

sortAnagrams(['acre', 'act', 'race', 'cat', 'tac', 'care'])
=> ['acre', 'care', 'race', 'act', 'cat', 'tac', ]
Once all the words have been grouped into lists by anagram we can put them back into the array.

credit to https://blog.anthonycomito.com/answer-the-anagram-interview-question-with-es6-c7621e43596d for the help!