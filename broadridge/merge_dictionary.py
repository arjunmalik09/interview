// Merge two dictionary 
// dict1 = {'a': 10, 'b': 20, 'c': 30}
// dict2 = {'b': 40, 'd': 50, 'e': 60, 'c': 70}
// #output  = {'a': 10, 'b': [20,40], 'd': 50, 'e': 60, 'c':[30, 70]} // merged_dict
def merge_dictionary(dict1: Dict, dict2: Dict):
    merged_dict: Dict = {}
    for key, value in dict1.items():
         merged_dict[key] = value
    for key, value in dict2.items():
        if merged_dict.get(key, None) == None:
            merged_dict[key] = value
        else:
            merged_dict[key] = [merged_dict[key]]
            merged_dict[key].append(value)
    return merged_dict