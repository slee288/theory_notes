'''
Generators can be a great choice for scenarios where data manipulation
is not required and memory efficiency is a priority. 
Generators produce values on the fly, so it significantly reduces memory
usage (i.e. memory efficient), but at the same time, we won't have access to the value once its turn
has passed.

Lists can be a better alternative if we require random access and mutability
of data, thus requiring data manipulation (addition, modification, deletion)

That being said, generator is a more efficient choice when we are simply 
iterating through a read-only data, whereas list is a better alternative 
if we need to edit the data.
'''