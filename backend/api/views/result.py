from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from ..models import *

# FUNCTIONS
urban_level = 10

sustain = ['ΒΙΩΣΙΜΟ', 'ΣΧΕΤΙΚΑ ΒΙΩΣΙΜΟ', 'ΜΗ ΒΙΩΣΙΜΟ']

names = {'1_1': '1.1. Πυκνότητα πληθυσμού',
         '2_1': '2.1. Συνολική Δομημένη επιφάνεια ανά κάτοικο',
         '2_2': '2.2. Αστικοποιημένη επιφάνεια',
         '3_1': '3.1. Ετήσια κατανάλωση ενέργειας που αντιστοιχεί σε κάθε μόνιμο κάτοικο ανα μήνα και έτος',
         '4_1': '4.1. Κατά Κεφαλήν Ακαθάριστο Εγχώριο Προιόν',
         '5_1': '5.1. Αριθμός τουριστών ανά ημέρα αιχμής / πληθυσμός',
         '6_1': '6.1. Ιστορικός - Πολιτιστικός δείκτης (Ποιοτική αξιολόγηση)'}

# Check if key exists


def key_exists(index_dict, key_value):
    exists = any(key_value in subdict for subdict in index_dict.values())
    if exists == True:
        return True
    else:
        return False

# Calculate 1_1 index


def index_1_1(index_dict, query_dict):

    exists = key_exists(index_dict, '1_1')

    index_name = '1_1'

    if exists:
        # Looping through each key in index_dict
        for key in index_dict:
            if index_name in index_dict[key]:

                if query_dict[key]['urban'] < urban_level:

                    foo = int(index_dict[key][index_name][0])

                    percent = ((foo / 100) - 1) * 100

                    if percent < 0:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 0 and percent <= 10:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 10 and percent <= 30:
                        index_dict[key][index_name][2] = sustain[1]
                    elif percent > 30:
                        index_dict[key][index_name][2] = sustain[2]

                if query_dict[key]['urban'] > urban_level:

                    foo = int(index_dict[key][index_name][0])

                    percent = ((foo / 400) - 1) * 100

                    if percent < 0:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 0 and percent <= 10:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 10 and percent <= 30:
                        index_dict[key][index_name][2] = sustain[1]
                    elif percent > 30:
                        index_dict[key][index_name][2] = sustain[2]


def index_2_1(index_dict, query_dict):

    exists = key_exists(index_dict, '2_1')

    index_name = '2_1'

    if exists:
        # Looping through each key in index_dict
        for key in index_dict:
            if index_name in index_dict[key]:

                if query_dict[key]['urban'] < urban_level:

                    foo = int(index_dict[key][index_name][0])

                    percent = ((foo / 50) - 1) * 100

                    if percent < 0:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 0 and percent <= 10:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 10 and percent <= 30:
                        index_dict[key][index_name][2] = sustain[1]
                    elif percent > 30:
                        index_dict[key][index_name][2] = sustain[2]

                if query_dict[key]['urban'] > urban_level:

                    foo = int(index_dict[key][index_name][0])

                    percent = ((foo / 100) - 1) * 100

                    if percent < 0:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 0 and percent <= 10:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 10 and percent <= 30:
                        index_dict[key][index_name][2] = sustain[1]
                    elif percent > 30:
                        index_dict[key][index_name][2] = sustain[2]


def index_2_2(index_dict, query_dict):

    exists = key_exists(index_dict, '2_2')

    index_name = '2_2'

    if exists:
        # Looping through each key in index_dict
        for key in index_dict:
            if index_name in index_dict[key]:

                if query_dict[key]['urban'] < urban_level:

                    foo = int(index_dict[key][index_name][0])

                    percent = ((foo / 50) - 1) * 100

                    if percent < 0:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 0 and percent <= 10:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 10 and percent <= 30:
                        index_dict[key][index_name][2] = sustain[1]
                    elif percent > 30:
                        index_dict[key][index_name][2] = sustain[2]

                if query_dict[key]['urban'] > urban_level:

                    foo = int(index_dict[key][index_name][0])

                    percent = ((foo / 100) - 1) * 100

                    if percent < 0:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 0 and percent <= 10:
                        index_dict[key][index_name][2] = sustain[0]
                    elif percent > 10 and percent <= 30:
                        index_dict[key][index_name][2] = sustain[1]
                    elif percent > 30:
                        index_dict[key][index_name][2] = sustain[2]


def index_3_1(index_dict, query_dict):

    exists = key_exists(index_dict, '3_1')

    # Μ.Ο. Χώρας
    country_average = 50

    index_name = '3_1'

    if exists:
        # Looping through each key in index_dict
        for key in index_dict:
            if index_name in index_dict[key]:

                foo = int(index_dict[key][index_name][0])

                percent = ((foo / country_average) - 1) * 100

                if percent < 0:
                    index_dict[key][index_name][2] = sustain[0]
                elif percent > 0 and percent <= 10:
                    index_dict[key][index_name][2] = sustain[0]
                elif percent > 10 and percent <= 30:
                    index_dict[key][index_name][2] = sustain[1]
                elif percent > 30:
                    index_dict[key][index_name][2] = sustain[2]


def index_4_1(index_dict, query_dict):

    exists = key_exists(index_dict, '4_1')

    # Μ.Ο. Χώρας
    country_average = 100

    index_name = '4_1'

    if exists:
        # Looping through each key in index_dict
        for key in index_dict:
            if index_name in index_dict[key]:

                foo = int(index_dict[key][index_name][0])

                percent = ((foo / country_average) - 1) * 100

                if percent < 0:
                    index_dict[key][index_name][2] = sustain[0]
                elif percent > 0 and percent <= 10:
                    index_dict[key][index_name][2] = sustain[0]
                elif percent > 10 and percent <= 30:
                    index_dict[key][index_name][2] = sustain[1]
                elif percent > 30:
                    index_dict[key][index_name][2] = sustain[2]


def index_5_1(index_dict, query_dict):

    exists = key_exists(index_dict, '5_1')

    # Μ.Ο. Χώρας
    country_average = 20

    index_name = '5_1'

    if exists:
        # Looping through each key in index_dict
        for key in index_dict:
            if index_name in index_dict[key]:

                foo = int(index_dict[key][index_name][0])

                percent = ((foo / country_average) - 1) * 100

                if percent < 0:
                    index_dict[key][index_name][2] = sustain[0]
                elif percent > 0 and percent <= 10:
                    index_dict[key][index_name][2] = sustain[0]
                elif percent > 10 and percent <= 30:
                    index_dict[key][index_name][2] = sustain[1]
                elif percent > 30:
                    index_dict[key][index_name][2] = sustain[2]


def index_6_1(index_dict, query_dict):

    exists = key_exists(index_dict, '6_1')

    # Μ.Ο. Χώρας
    country_average = 200

    index_name = '6_1'

    if exists:
        # Looping through each key in index_dict
        for key in index_dict:
            if index_name in index_dict[key]:

                foo = int(index_dict[key][index_name][0])

                percent = ((foo / country_average) - 1) * 100

                if percent < 0:
                    index_dict[key][index_name][2] = sustain[0]
                elif percent > 0 and percent <= 10:
                    index_dict[key][index_name][2] = sustain[0]
                elif percent > 10 and percent <= 30:
                    index_dict[key][index_name][2] = sustain[1]
                elif percent > 30:
                    index_dict[key][index_name][2] = sustain[2]


def guidelines(index_dict, query_dict):

    index_1_1(index_dict, query_dict)
    index_2_1(index_dict, query_dict)
    index_2_2(index_dict, query_dict)
    index_3_1(index_dict, query_dict)
    index_4_1(index_dict, query_dict)
    index_5_1(index_dict, query_dict)
    index_6_1(index_dict, query_dict)


@api_view(['POST'])
def resultView(request):
    # data = request.data

    data = [['ΝΗΛΕΩΣ', '1_1', '1', '3'], ['ΝΗΛΕΩΣ', '2_1', '12', '4'], ['ΝΗΛΕΩΣ', '2_2', '34', '3'], ['ΚΗΡΕΩΣ', '1_1', '34', '1'],
            ['ΚΗΡΕΩΣ', '2_1', '1', '1'], ['ΚΗΡΕΩΣ', '2_2', '2', '4'], [
                'ΚΗΡΕΩΣ', '2_2', '27', '4'], ['ΕΛΥΜΝΙΩΝ', '1_1', '670', '5'],
            ['ΕΛΥΜΝΙΩΝ', '2_1', '550', '2'], ['ΕΛΥΜΝΙΩΝ', '2_1',
                                              '552', '4'], ['ΕΛΥΜΝΙΩΝ', '2_2', '2', '2'],
            ['ΝΗΛΕΩΣ', '3_1', '550', '2'], ['ΚΗΡΕΩΣ', '3_1',
                                            '552', '4'], ['ΕΛΥΜΝΙΩΝ', '3_1', '2', '2'],
            ['ΝΗΛΕΩΣ', '4_1', '550', '2'], ['ΚΗΡΕΩΣ', '4_1',
                                            '552', '4'], ['ΕΛΥΜΝΙΩΝ', '4_1', '2', '2'],
            ['ΝΗΛΕΩΣ', '5_1', '550', '2'], ['ΚΗΡΕΩΣ', '5_1',
                                            '552', '4'], ['ΕΛΥΜΝΙΩΝ', '5_1', '2', '2'],
            ['ΝΗΛΕΩΣ', '6_1', '550', '2'], ['ΚΗΡΕΩΣ', '6_1', '552', '4'], ['ΕΛΥΜΝΙΩΝ', '6_1', '2', '2']]

    # Get unique dimens
    dimen = []

    for item in data:
        dimen.append(item[0])

    unique_dimen = list(set(dimen))

    # Get unique index values
    index_values = []

    for item in data:
        index_values.append(item[1])

    unique_index_values = list(set(index_values))

    # Create merged list
    index_dict = {key: unique_index_values.copy() for key in unique_dimen}

    # Convert each value from the list into a dictionary key pointing to ['x', 'y']
    append_list = ['i', 'w', 'state']

    for key, values in index_dict.items():
        index_dict[key] = {value: append_list.copy() for value in values}

    # Replace values in ondex_dict
    for item in data:
        # Extract the relevant values from the list
        main_key, sub_key, replace_i, replace_w = item
        if main_key in index_dict and sub_key in index_dict[main_key]:
            # Make the replacements
            index_dict[main_key][sub_key][0] = replace_i
            index_dict[main_key][sub_key][1] = replace_w

    # Fetch the records from the database that match the items in unique_dimen
    records = DimenTot.objects.filter(dimen__in=unique_dimen)

    # Construct the desired dictionary format
    query_dict = {}
    for record in records:
        # Using dictionary comprehension to generate the inner dictionary
        inner_dict = {
            'area': record.area,
            'urban': record.urban,
            'pop': record.pop
        }
        query_dict[record.dimen] = inner_dict

    # Call total function
    guidelines(index_dict, query_dict)

    # DIMEN CALCULATIONS

    # Get the values for the weights for each dimen
    transformed_dict = {}

    for k, v_dict in index_dict.items():
        transformed_dict[k] = {}
        for v in v_dict.values():
            key = v[1]
            value = v[2]
            if key in transformed_dict[k]:
                transformed_dict[k][key].append(value)
            else:
                transformed_dict[k][key] = [value]

    # Calculate fin index
    state_values = {
        'ΒΙΩΣΙΜΟ': 1,
        'ΣΧΕΤΙΚΑ ΒΙΩΣΙΜΟ': 2,
        'ΜΗ ΒΙΩΣΙΜΟ': 3
    }

    result = {}

    for key, sub_dict in transformed_dict.items():
        x = sum(int(weight) * state_values[state]
                for weight, states in sub_dict.items() for state in states)
        y = sum(int(weight) * len(states)
                for weight, states in sub_dict.items())

        division_result = x / y if y else 0

        if division_result < 1.5:
            result[key] = 'ΒΙΩΣΙΜΟ'
        elif 1.5 <= division_result < 2.5:
            result[key] = 'ΣΧΕΤΙΚΑ ΒΙΩΣΙΜΟ'
        else:
            result[key] = 'ΜΗ ΒΙΩΣΙΜΟ'

    # DIMOS CALCULATIONS

    transformed_dict = {}

    for primary_key, sub_dict in index_dict.items():
        for subkey, values in sub_dict.items():
            weight = values[1]
            state = values[2]

            if subkey not in transformed_dict:
                transformed_dict[subkey] = []

            transformed_dict[subkey].append([weight, state])

    dimos_final = {}

    for subkey, value_pairs in transformed_dict.items():
        x = sum(int(weight) * state_values[state]
                for weight, state in value_pairs)
        y = sum(int(weight) for weight, state in value_pairs)

        ratio = x/y
        if ratio < 1.5:
            dimos_final[subkey] = 'ΒΙΩΣΙΜΟ'
        elif 1.5 <= ratio < 2.5:
            dimos_final[subkey] = 'ΣΧΕΤΙΚΑ ΒΙΩΣΙΜΟ'
        else:
            dimos_final[subkey] = 'ΜΗ ΒΙΩΣΙΜΟ'

    # Calculate the average state value
    average_state = sum(state_values[state]
                        for state in dimos_final.values()) / len(dimos_final)

    # Determine the overall state
    if average_state < 1.5:
        dimos_final_all = 'ΒΙΩΣΙΜΟ'
    elif 1.5 <= average_state < 2.5:
        dimos_final_all = 'ΣΧΕΤΙΚΑ ΒΙΩΣΙΜΟ'
    else:
        dimos_final_all = 'ΜΗ ΒΙΩΣΙΜΟ'

    returned_list = [index_dict, result, dimos_final, dimos_final_all]

    returned_list_str = json.dumps(returned_list)

    for key, val in names.items():
        returned_list_str = returned_list_str.replace(f'"{key}":', f'"{val}":')

    returned_list_updated = json.loads(returned_list_str)

    # Replace index names in final lsit

    return Response(returned_list_updated)
